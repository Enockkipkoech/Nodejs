import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';

const __dirname = path.resolve();

const logEvents = async (msg) => {
	const dateTime = `${format(new Date(), 'yyyy-MM-dd \t HH:mm:ss')}`;
	const logMsg = `${dateTime}\t${uuidv4()}\t${msg}\n`;
	console.log({ logMsg });

	try {
		// Check if the logs directory exists
		const logsDir = path.join(__dirname, 'logs');
		if (!fs.existsSync(logsDir)) {
			fsPromises.mkdir(logsDir);
		}

		// Append the log message to the logs.txt file
		return await fsPromises.appendFile(
			path.join(__dirname, 'logs', 'logs.txt'),
			logMsg
		);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export { logEvents };
