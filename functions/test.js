module.exports = (req, res) => {
  const { name = "World" } = req.query;
  console.log(
    "This logs should be printed in dev and stored somewhere in prod"
  );
  
  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
  
  // add 5 secs sleep
  await sleep(5000);
  
  res.status(200).send(`PLEASE WORK  ${name}!`);
};
