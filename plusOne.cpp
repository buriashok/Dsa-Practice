#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        int n = digits.size();

        for (int i = n - 1; i >= 0; --i) {
            if (digits[i] < 9) {
                digits[i]++;
                return digits;
            }
            digits[i] = 0;
        }

        digits.insert(digits.begin(), 1);
        return digits;
    }
};

int main() {
    vector<int> digits = {1, 2, 3};
    Solution solution1;
    vector<int> result = solution1.plusOne(digits);

    for (int num : result) {
        cout << num;
    }

    cout << endl;
    return 0;
}
