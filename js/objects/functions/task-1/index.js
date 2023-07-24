/*
    1. Нужно реализовать функцию которая принимает в себя строку и проверяет читается ли эта строка одинаково в обоих направлениях
    func('34543') => true
    func('723210') => false
    Желательно сделать это несколькими способами
 */

    function isPalindrome(str){
        const formattedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const reversedStr = formattedStr.split('').reverse().join('');
        return formattedStr === reversedStr; 
    }
    
    console.log(isPalindrome('345543'));
    console.log(isPalindrome('723210'));
    
    // с использование цикла
    
    function isPalindrome(str) {
        const formattedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const len = formattedStr.length;
      
        for (let i = 0; i < len / 2; i++) {
          if (formattedStr[i] !== formattedStr[len - 1 - i]) {
            return false;
          }
        }
      
        return true;
      }
      
    console.log(isPalindrome('345543'));
    console.log(isPalindrome('723210'));
    
    // еще нашел вот такой способ
    
    function isPalindrome(str) {
        const formattedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const len = formattedStr.length;
      
    
        function compareCharacters(char, index) {
          return char === formattedStr[len - 1 - index];
        }
      
        return formattedStr.split('').every(compareCharacters);
      }
      
      
    console.log(isPalindrome('345543'));
    console.log(isPalindrome('723210'));