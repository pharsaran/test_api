const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // ใช้สำหรับแปลง JSON body เป็น JavaScript object

const todosRouter = require('./routes/todos');
app.use('/todos', todosRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});