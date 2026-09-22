import {homedir} from 'node:os';
import {resolve} from 'node:path';

export const PUBLIC_DIR = resolve(homedir(), 'OneDrive/Public');
export const BLOG_CONTENT_DIR = resolve(PUBLIC_DIR, 'Blog');
export const PRESENTATIONS_CONTENT_DIR = resolve(PUBLIC_DIR, 'Presentations');
export const PROFILE_CONTENT_DIR = resolve(PUBLIC_DIR, 'Profile');
