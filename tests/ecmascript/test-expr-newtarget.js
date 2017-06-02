/*
 *  new.target
 */

/*===
MyFunc called
undefined
false
false
MyFunc called
function
true
false
MyFunc called
undefined
false
false
MyFunc called
function
true
false
foo called
undefined
foo called
target-prop-value
===*/

var bound;

function MyFunc() {
    print('MyFunc called');
    print(typeof new.target);
    print(new
        .
            target === MyFunc);
    print(new /* comment */ .  // another comment
          target === bound);
}

function test() {
    bound = MyFunc.bind(null, 123);

    MyFunc();
    new MyFunc();

    bound();
    new bound();

    function foo() {
        print('foo called');
        if (new.target) {
            print(new.target.target);
        } else {
            print('undefined');
        }
    }
    foo.target = 'target-prop-value';
    foo();
    new foo();
}

try {
    test();
} catch (e) {
    print(e.stack || e);
}

/* FIXME: new.target outside functions (not allowed?) */
/* FIXME: new.target = 123; outside and inside function */
/* FIXME: eval('new.target') outside function */
/* FIXME: eval('new.target') inside function */
/* FIXME: new.target in program code; separate test */
/* FIXME: new.foo syntax error */
