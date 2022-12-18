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
/**
 * Utility to remove (but keep) 'separators' from a string
 *  const string = "Hello_party-people!";
 * [ "Hello", "_", "party", "-", "people!" ]
 */
export declare function removeSeparators(string: string): string[];
