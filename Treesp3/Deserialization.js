let arr = [1, 2, 4, -1, 6, -1, -1, -1, 3, -1, 5, 8, -1, -1, 7, -1, -1];

class Node {
    val;
    left;
    right;
    constructor(v) {
        this.val = v;
    }
}

function constructTree(arr) {
    let idx = 0;

    function createTree() {
        if (idx == arr.length) return null;
        if (arr[idx] == -1) {
            idx++;
            return null;
        }

        let me = new Node(arr[idx]);
        idx++;
        let getMyLeft = createTree();
        let getMyRight = createTree();
        me.left = getMyLeft;
        me.right = getMyRight;
        return me;
    }
    return createTree();
}

function displayTree(root) {
    if (root == null) return;
    let s = "";
    s += root.val + ": ";

    if (root.left == null) s += "-1, ";
    else s += root.left.val + ", ";

    if (root.right == null) s += "-1";
    else s += root.right.val;
    console.log(s);

    displayTree(root.left);
    displayTree(root.right);
}

function morrisTraversal(root){
    let temp = root;
    let preorder = "Pre: ";
    let inorder = "In: ";
    while(temp!=null){
        if(temp.left == null){
            //pre
            preorder+=temp.val+", ";
            //in
            inorder+=temp.val+", ";
            temp = temp.right;
        }else{
            let lrm = temp.left;
            console.log(lrm.val);
            while(lrm.right != null && lrm.right != temp) lrm =lrm.right;
            if(lrm.right == null){
                // first time
                preorder+=temp.val+", ";
                lrm.right = temp;
                temp = temp.left;
            }else{
                //second time
                inorder+=temp.val+", ";
                lrm.right = null;
                temp = temp.right;
            }
        }
    }
    console.log(preorder);
    console.log(inorder);
}

let root = constructTree(arr);
morrisTraversal(root);