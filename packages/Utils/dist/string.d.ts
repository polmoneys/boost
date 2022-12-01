/**
 * Utility to truncate a string from both ends
 */
export declare function truncateStartEnd(initial: string, padding?: number): {
    next: string;
    prev: string;
} | undefined;
/**
 * Utility to test for special chars in a file name
 */
export declare function validFileName(initial: string): boolean;
