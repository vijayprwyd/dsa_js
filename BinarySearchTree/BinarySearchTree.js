function BinarySearchTree() {


}

BinarySearchTree.prototype.search = function(root, val) {

    if(root === null || root.val === val) {
        return root;
    } else if(root.val > val) {
        return this.search(root.left, val);
    } else {
        return this.search(root.right, val);
    }
}
