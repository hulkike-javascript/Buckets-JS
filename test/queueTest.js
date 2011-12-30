describe('Queue',
function() {

    var queue;

    beforeEach(function() {
        queue = new buckets.Queue();
    });

    function createQueue() {
        queue.enqueue('a');
        queue.enqueue('b');
        queue.enqueue('c');
    }

    it('Constructor',
    function() {

        expect(queue.isEmpty()).toEqual(true);
        expect(queue.size()).toEqual(0);
        expect(queue.peek()).toBeUndefined();

    });


    it('Gives the right size',
    function() {

        createQueue();
        expect(queue.size()).toEqual(3);
        queue.enqueue('d');
        expect(queue.size()).toEqual(4);
        queue.dequeue();
        expect(queue.size()).toEqual(3);
        queue.clear();
        expect(queue.size()).toEqual(0);

    });

    it('Enqueues correctly',
    function() {

		createQueue();
		var head = queue.dequeue();
		expect(head).toEqual('a');
		queue.dequeue();
		head = queue.dequeue();
		expect(head).toEqual('d');
		expect(queue.isEmpty()).toBeTruthy();
		head = queue.dequeue();
		expect(head).toBeUndefined();
    });

    it('Peeks correctly',
    function() {
	
		createQueue();
		var head = queue.peek();
		expect(head).toEqual('a');
		var head2 = queue.dequeue();
		expect(head).toEqual(head2);
		head = queue.peek();
		expect(head).toEqual('b');
		queue.clear();
		head = queue.peek();
		expect(head).toBeUndefined();
    });

    it('Contains previously added items',
    function() {
	
		createQueue();
		expect(queue.contains('a')).toBeTruthy();
		expect(queue.contains('foo')).toBeFalsy();
		expect(queue.contains(undefined)).toBeFalsy();
    });

});