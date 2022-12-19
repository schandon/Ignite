const express = require("express");

const { v4: uuidv4 } = require("uuid");	

const app = express();

app.use(express.json());

const customers = [];

//Middlewarts
function verifyExistsAccount(request, response, next) {
  const { cpf } = request.headers;

  const customer = customers.find((customer)=> customer.cpf ===cpf);
 
  if(!customer){
    return response.status(404).json({error: "Customer not found"});
  }
  request.customer = customer;
  return next();

}
function getBalance(statement) {
  const balance = statement.reduce((acc, operation)=> {
    if(operation.type==="credit"){
      return acc + operation.amount;
    }else{
      return acc - operation.amount;
    }
  }, 0);

  return balance;
}

app.post("/account",(request, response)=>{
    const { cpf, name } = request.body;
    
    const customersAlredyExists = customers.some((customer)=> customer.cpf === cpf);
    if(customersAlredyExists){
      return response.status(400).json({error: "Customer already exists"});
    }else{
      customers.push({
        cpf,
        name,
        id: uuidv4(),
        statement: []
      })
    }
    
    return response.status(201).send();
})

app.get("/statement", verifyExistsAccount ,(request, response)=>{
    const { customer } = request
    return response.status(200).json(customer);
})

app.post("/deposit",verifyExistsAccount, (request, response)=>{
  const { amount, description } = request.body;
  const { customer } = request;

  const statementOperation = {
    description,
    amount,
    createdAt: new Date(),
    type: "credit",
  }

  customer.statement.push(statementOperation);

  return response.status(201).send();
})

app.post("/withdraw",verifyExistsAccount, (request, response)=>{
  const { amount } = request.body;
  const { customer } = request;

  const balance = getBalance(customer.statement);

  if (balance < amount){
    return response.status(400).json({error: "Insufficient funds!"});
  }
  const statementOperation = {
    amount, 
    createdAt: new Date(),
    type: "debit",
  }

  customer.statement.push(statementOperation);
  
  return response.status(201).send();
});

app.listen(3009);