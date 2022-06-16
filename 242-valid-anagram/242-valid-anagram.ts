function isAnagram(str1: string, str2: string): boolean {
    if (str1.length != str2.length) return false;
    
    const map1 = {}, map2 = {}
    
    for (let i: number = 0; i < str1.length; i++ ){
        map1[str1[i]] = map1[str1[i]] + 1 || 1
        map2[str2[i]] = map2[str2[i]] + 1 || 1
    }
    
    for (let value in map1){
        if (map2[value] != map1[value])  return false
    }
    
    return true
}