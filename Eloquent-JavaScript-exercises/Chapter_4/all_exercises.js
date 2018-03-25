range = function(first, last) {
  let ret = [];
  for (let i = first; i <= last; i++) {
    ret.push(i);
  }
  return ret;
};

range2 = function(first, last, step) {
  console.log (`step is ${step}`);
  if (step === undefined) {
    step = 1;
  }
  console.log (`step is ${step}`);
  let ret = [];

  comp = (a, b, step) => {
    return (step > 0)
      ? a <= b
      : a >= b;
  };

  for (let i = first; comp(i, last, step); i += step) {
    console.log(`i is ${i}`);
    ret.push(i);
  }
  return ret;
};

range3 = function(first, last, step) {
  console.log (`step is ${step}`);
  if (step === undefined) {
    step = 1;
  }
  console.log (`step is ${step}`);
  let ret = [];

  for (let i = first; i <= last; i += step) {
    console.log(`i is ${i}`);
    ret.push(i);
  }
  return ret;
};



sum = function(arr) {
  let ret = 0;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    ret += arr[i];
  }
  return ret
}

reverseArray = function(arr) {
  let ret = [];
  for (i=0; i < arr.length; i++) {
    console.log(`arr[${i}] is: ${arr[i]}`);
    ret.unshift(arr[i]);
  }
  return ret;
}

reverseArrayInPlace = function(arr) {
  let temp;
  let i;
  swap = function (arr, a, b) {
    temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };
  console.log(`arr.length is ${arr.length}`);
  for (i=0; i < arr.length/2; i++) {
    console.log(`arr[${i}] is: ${arr[i]}`);
    swap (arr, i, arr.length-i-1);
  }
}

arrayToList = function(arr) {
  if (arr.length === 0) {
    return null;
  }
  if (arr.length === 1) {
    return {value: arr[0], rest: null};
  }
  return {value: arr[0], rest: arrayToList(arr.slice(1)) }
}

listToArray = function(list) {
  ret = [];
  if (list !== null) {
    do {
      ret.push(list.value);
      list = list.rest;
    } while (list !== null);
  }
  return ret;
}

prepend = function(element, list) {
  if (!list) {
    return { value: element, rest: null };
  }
  return { value: element, rest: list };
}

nth = function (list, n) {
  console.log('n is ', n);
  // console.log(`list is: ${JSON.stringify(list, null, 4)}`);
  // console.log(`arrayToList(list) is: ${listToArray(list)}\n\n`);
  if (!list || n < 0) {
    return undefined;
  }
  if (n === 0) {
    return (list.value);
  }
  if (list.rest === null) {
    return undefined;
  }
  return nth(list.rest, n-1);
}

pp = (o) => {
  return JSON.stringify(o, null, 4);
}
deepEqual = function (o1, o2) {
  // console.log(`entering, \n  o1 is: ${pp(o1)}\n  o2 is: ${pp(o2)}`);
  if ((typeof o1 === 'object') && (typeof o2 === 'object')) {
    if (((o1 === null) && (o2 !== null)) || ((o2 === null) && (o1 !== null))) {
      // console.log('one is null and the other is not');
      return false
    }
    // console.log(`both are non-null objects:\n  o1 is: ${pp(o1)}\n  o2 is: ${pp(o2)}`);
    // compare properties
    let pName;
    for (pName in o1) {
        // console.log(`o1 properties: ${pName}:\n  o1[${pName}] is: ${pp(o1[pName])}\n  o2[${pName}] is: ${pp(o2[pName])}`);
        //if (!deepEqual(o1.pName, o2.pName)) {
        if (!deepEqual(o1[pName], o2[pName])) {
          return false;
        }
    }
    for (pName in o2) {
        // console.log(`o2 properties: ${pName}:\n  o1[${pName}] is: ${pp(o1[pName])}\n  o2[${pName}] is: ${pp(o2[pName])}`);
        if (!deepEqual(o1.pName, o2.pName)) {
          return false;
        }
    }
    // console.log(`returning true for comparing:\n  o1: ${pp(o1)}\n  o2: ${pp(o2)}`);
    return true;
  }
  // console.log(`at least one is not an object:\n  o1 is: ${pp(o1)}\n  o2 is: ${pp(o2)}`);
  // console.log(`returning comparison of:\n  o1: ${pp(o1)}\n  o2: ${pp(o2)}`);
  return (o1 === o2);
}

deepEqual = function (o1, o2) {
  if ((typeof o1 === 'object') && (typeof o2 === 'object')) {
    if (((o1 === null) && (o2 !== null)) || ((o2 === null) && (o1 !== null))) {
      return false
    }
    // compare properties
    let prop;
    let propArr = [];
    for (prop in o1)
      if (propArr.indexOf(prop) == -1)
        propArr.push(prop);
    for (pName in o2)
      if (propArr.indexOf(prop) == -1)
        propArr.push(prop);
     
    for (let i = 0; i < propArr.length; i++) {
        prop = propArr[i];
        if (!deepEqual(o1[prop], o2[prop])) {
          return false;
        }
    }
    return true;
  }
  return (o1 === o2);
}

