function xor(cond1, cond2) {
	// if cond1 is true and cond2 is false return true
	if (cond1 === true && cond2 === false){
		return true
	}
	// if cond1 is false and cond2 is true return true
	if (cond1=== false && cond2 === true){
		return true
	}
	
	return false
}
