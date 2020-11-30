package beans;

import model.Point;

import javax.faces.bean.ManagedBean;

import javax.faces.bean.SessionScoped;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@ManagedBean
@SessionScoped
public class TableBean implements Serializable {
    private Point newPoint = new Point();
    private List<Point> table = new ArrayList<>();

    public void addPoint(){
        newPoint.checkArea();
        table.add(newPoint);
        try {
            EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("org.table.jpa");
            EntityManager entityManager = entityManagerFactory.createEntityManager();
            entityManager.getTransaction().begin();
            entityManager.persist(newPoint);
            entityManager.getTransaction().commit();
            entityManagerFactory.close();
        } catch (Exception ignore) {}
        newPoint = new Point();
    }

    public Point getNewPoint() { return newPoint; }
    public List<Point> getTable() { return table; }

    public void setNewPoint(Point newPoint) { this.newPoint = newPoint; }
    public void setTable(List<Point> table) { this.table = table; }


}
