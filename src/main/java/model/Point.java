package model;

import org.hibernate.annotations.GenericGenerator;
import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.Date;

@Entity
@Table(name = "s207704.point")
public class Point {
    @Id
    @Column(name = "id")
    @GeneratedValue(generator = "incrementator")
    @GenericGenerator(name = "incrementator", strategy = "increment")
    private int id;
    @Column(name = "x")
    private Double x;
    @Column(name = "y")
    private Double y;
    @Column(name = "r")
    private Double r;
    @Column(name = "time")
    private String time;
    @Column(name = "income")
    private String  income;

    public Double getX() { return x; }
    public Double getY() { return y; }
    public Double getR() { return r; }
    public String getTime() { return time; }
    public String  getIncome() { return income;}

    public void setX(Double x) { this.x = x; }
    public void setY(Double y) { this.y = y; }
    public void setR(Double r) { this.r = r; }
    public void setTime() { time = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS").format(new Date()); }
    public void setIncome(String income) { this.income = income; }

    public void checkArea(){
        income = "false";
        if (y > 0){
            if (x <0){
                if (x * x + y * y <= r * r) income = "true";
            }
        }
        else if (x >= 0){
            if ((x < r / 2) && (y > -r)) income = "true";
        }
        else if (y > x - r / 2) income = "true";
        if ((y <= -3) || (y >= 5)) income = "Wrong parameter Y";
        if ((x < -2) || (x > 2)) income = "Wrong parameter X";
        if ((r < 1) || (r > 5)) income = "Wrong parameter R";
    }

    @Override
    public String toString() {
        return "Point{" +
                "x=" + x +
                ", y=" + y +
                ", r=" + r +
                ", time='" + time +
                ", income='" + income + '\'' +
                '}';
    }
}

