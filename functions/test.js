module.exports = (req, res) => {
  const { name = "World" } = req.query;
  console.log(
    "This logs should be printed in dev and stored somewhere in prod"
  );
  
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  res.status(200).send(`PLEASE WORK  ${name}!`);
};
