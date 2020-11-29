package model;

public class Point {
    private Double x;
    private Double y;
    private Double r;
    private Boolean income;

//    public Point(Double x, Double y, Double r) {
//        this.x = x;
//        this.y = y;
//        this.r = r;
//        this.income = checkArea();
//    }


    public Double getX() { return x; }
    public Double getY() { return y; }
    public Double getR() { return r; }
    public Boolean getIncome() { return income;}

    public void setX(Double x) { this.x = x; }
    public void setY(Double y) { this.y = y; }
    public void setR(Double r) { this.r = r; }
    public void setIncome(Boolean income) { this.income = income; }


    public void checkArea(){
        income = false;
        if (y > 0){
            if (x <= 0){
                if (x * x + y * y <= r * r) income = true;
            }
        }
        else if (x > 0){
            if ((x < r / 2) && (y > r)) income = true;
        }
        else if (y > x - r / 2) income = true;
    }
}
