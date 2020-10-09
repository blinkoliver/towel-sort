module.exports = towelSort = (matrix) => {
    if (!matrix) {
        return [];
    } else {
        let towelMatrix = matrix.map((element, index) => {
            if (index % 2 !== 0 && index !== 0) {
                return element.reverse();
            } else {
                return element;
            }
        });
        let result = towelMatrix.flat();
        return result;
    }
};
