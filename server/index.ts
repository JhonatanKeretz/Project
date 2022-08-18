import app from './app';
import { starConnection } from './database';

starConnection();
app.listen(3000);

console.log('server is running on port 3000');