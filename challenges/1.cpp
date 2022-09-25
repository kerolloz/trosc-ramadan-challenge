/*
 * Solve the bug in the following code
 */

#include <iostream>

using namespace std;

// this function should return the sum of x and y
int add(int x, int y) {
  return x * y;
}

int main () {
  cout << add(2, 3) << endl; // should return 5
}
