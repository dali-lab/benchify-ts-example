// Function to check if a string is empty
export function isEmptyString(str: string): boolean {
    return str.trim() === '';
}

// Function to check if a string is a palindrome
export function isPalindrome(str: string): boolean {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

// Function to count the number of occurrences of a substring in a string
export function countSubstringOccurrences(str: string, substring: string): number {
    const regex = new RegExp(substring, 'g');
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}

// Function to truncate a string to a specified length
export function truncateString(str: string, maxLength: number): string {
    if (str.length <= maxLength) {
        return str;
    }
    return str.slice(0, maxLength) + '...';
}

// Function to capitalize the first letter of each word in a string
export function capitalizeWords(str: string): string {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
}