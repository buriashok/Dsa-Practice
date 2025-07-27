// #include <map>
// #include <string>
// using namespace std;

// map with int keys and string values
// map<int, string> m={
//    {1, "Ashok"},
//    {2, "Abhiram"} 
// } ;

// m[3] = "eve";

#include <iostream>
#include <map>
using namespace std;

int main(){

   map<string, int> age;
   age["Alice"] = 23;
   age["Bob"] = 30;

   // cout << "Alice's age: " << age["Alice"] << endl;
   age.insert({"Vedanth", 34});
   // cout << "Vedanth's age: " << age["Vedanth"] << endl;
   auto it = age.find("Vedanth");
   if(it != age.end()){
      cout << "Found Vedanth: " << it->first << "'s age is "<< it->second << endl;
   } else {
      cout << "Vedanth not found." << endl;
   }
   return 0;
}





