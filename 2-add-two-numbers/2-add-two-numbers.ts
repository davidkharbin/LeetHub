/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


// editing to test leethub extension
function carry(num: number): number[] {
	if (num / 10 > 0) {
		return [Math.floor(num / 10), num % 10];
	}
	return [0, 0];
}

function sumLinkedLists(l1: ListNode | null, l2: ListNode | null, carryDigit: number): ListNode | null {
    if(l1 === null && l2 === null){
        if(carryDigit){
            return new ListNode(carryDigit);
        }
        return null;
    }

	//if one of the lists ends 
	if (l1 === null) {
		let carryOfSum = carry(l2.val + carryDigit);
		let resultNode = new ListNode(carryOfSum[1]);
		let remainingSum = sumLinkedLists(null, l2.next, carryOfSum[0]);
		resultNode.next = remainingSum;
		return resultNode;
	} else if (l2 === null) {

		let carryOfSum = carry(l1.val + carryDigit);
		let resultNode = new ListNode(carryOfSum[1]);
		let remainingSum = sumLinkedLists(l1.next, null, carryOfSum[0]);
		resultNode.next = remainingSum;
		return resultNode;
	}

	let sum = l1.val + l2.val;

	let carryOfSum = carry(sum + carryDigit);
	let carryVal = carryOfSum[0];
	let sumDigit = carryOfSum[1];

	let resultNode = new ListNode(sumDigit);

	let remainingSum = sumLinkedLists(l1.next, l2.next, carryVal);

	resultNode.next = remainingSum;
	return resultNode;

}

//main
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

	return sumLinkedLists(l1, l2, 0);

};