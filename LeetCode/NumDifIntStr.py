class Solution:
    def numDifferentIntegers(self, word: str) -> int:
        return len({int(x) for x in re.split(r'[^0-9]', word) if x})