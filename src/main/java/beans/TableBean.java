package beans;

import model.Point;

import javax.faces.bean.ManagedBean;

import javax.faces.bean.SessionScoped;
//import javax.enterprise.context.SessionScoped;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@ManagedBean
@SessionScoped
public class TableBean implements Serializable {
    private Point newPoint = new Point();
    private List<Point> table = new ArrayList<Point>();

    public void addPoint(){
        newPoint.checkArea();
        table.add(newPoint);
        newPoint = new Point();
    }

    public Point getNewPoint() { return newPoint; }
    public List<Point> getTable() { return table; }

    public void setNewPoint(Point newPoint) { this.newPoint = newPoint; }
    public void setTable(List<Point> table) { this.table = table; }


}
