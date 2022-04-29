module.exports = (req, res) => {
  export function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  sleep(5000);
  
  res.status(200).send(`Should work`);
};
