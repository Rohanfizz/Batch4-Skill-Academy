import java.util.*;

class test {

  public static void findPaths(int[][] grid, int i, int j, String psf) {
    if (i == grid.length - 1 && j == grid.length - 1) {
      System.out.println(psf);
      return;
    }
    if (i >= grid.length || i < 0 || j >= grid.length || j < 0) return;
    if (grid[i][j] == 1) return;
    grid[i][j] = 1;
    findPaths(grid, i + 1, j, psf + "D");
    findPaths(grid, i, j + 1, psf + "L");
    findPaths(grid, i - 1, j, psf + "U");
    findPaths(grid, i, j - 1, psf + "R");
    grid[i][j] = 0;
  }

  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    int[][] grid = {
    { 0, 0, 0 }, 
    { 0, 0, 0 }, 
    { 1, 0, 0 } };
    findPaths(grid, 0, 0, "");
    scn.close();
  }
}
