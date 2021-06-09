const express = require('express');
const router = express.Router();

router.post('/login', (req, res, next) => {
  try {
    const { username, password} = req.body;
    if (username == 'chucks') {
        return res.json({
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGFmZklkIjoxLCJwZXJtaXNzaW9uSWQiOjEsImlhdCI6MTYxNTQ3MzA1OH0.2q98iyk3MYkn2KjU7r1-e8k6-3ASkrlimDu5qW-7ffY'
        });
    }

    return res.status(401).json({message: 'Invalid username and/or password'});

  } catch(err) {
    return next(err);
  }
});

module.exports = router;