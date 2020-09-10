/*
  1.首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
  2.再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
  3.重复第二步，直到所有元素均排序完毕。
  O(n^2)
    选择排序是一种简单直观的排序算法，无论什么数据进去都是 O(n²) 的时间复杂度。
    所以用到它的时候，数据规模越小越好。唯一的好处可能就是不占用额外的内存空间了吧。
*/

function f1(arr) {
    for (let i = 0, len = arr.length - 1; i < len; i++) {
        let maxIndex = i;
        for (let j = i + 1, len = arr.length; j < len; j++) {
            if (arr[maxIndex] > arr[j]) {
                maxIndex = j
            }
        }
      let temp = arr[i]
      arr[i] = arr[maxIndex]
      arr[maxIndex] = temp
    }
    return arr;
}

console.log(f1([1, 3, 7, 9, 3, 4, 6, 9, 8]))
