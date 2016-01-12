
/*
  Either of the following two patterns can e used to immediately invoke a function expression
  This uses the functions execution context to create privacy
 */

(function(){ /*Insert your code here */ }());   // Douglas Crockford recommends this approach
(function(){ /*Insert your code here */ })();   // This approach is also widely used