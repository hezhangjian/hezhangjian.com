import { homedir } from 'node:os';
import { resolve } from 'node:path';

export const BLOG_CONTENT_DIR = resolve(homedir(), 'OneDrive/Blog');
