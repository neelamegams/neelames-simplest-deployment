@path: '/basic'
service basic{
    function ping() returns String;
    function hello (to:String) returns String;
    function sum (a:Integer, b:Integer) returns Integer;
}