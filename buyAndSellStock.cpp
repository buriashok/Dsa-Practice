#include <iostream>
#include <vector>
#include <climits>
using namespace std;

class Solution {
    public:

    int maxProfit(vector<int>& prices) {
        int minPrice = INT_MAX;
        int maxProfit = 0;

        for (int price : prices) {
            if(price < minPrice) {
                minPrice = price;
            } else {
                maxProfit = max(maxProfit, price - minPrice);
            }
        }

        return maxProfit;
    }
};

int main(){
    vector<int> prices = {7, 1, 5, 3, 6, 4};

    Solution sol;
    
    int profit = sol.maxProfit(prices);
    cout << "Maximum Profit: " << profit <<endl;

    return 0;
}