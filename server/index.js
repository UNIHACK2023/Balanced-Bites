import app from './app.js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
