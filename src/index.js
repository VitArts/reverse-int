module.exports = function reverse (n) {
  let newN = '';
	n = String(n)
	for(let i = 0; i < n.length; i++) {
   newN = n[i] + newN
	}

	if (newN[newN.length - 1] === '-') {
		newN = newN.slice(0, -1)
	}

	return newN
}
