// Function to check if a string is empty
export function isEmptyString(str: string): boolean {
    return str.trim() === '';
}

// Function to check if a string is a palindrome
export function isPalindrome(str: string): boolean {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
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
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}