-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select p.ProductName, c.CategoryName
from Product as p left join Category as c on c.id = p.CategoryId

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT o.id, s.companyname
FROM [Order] as o join Shipper as s on o.shipvia = s.id
where o.OrderDate < '2012-08-09'

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select p.productname, od.quantity
from orderdetail as od join product as p on od.productid = p.id
where od.OrderId = 10251
order by p.ProductName

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select o.id, c.companyname, e.lastname as EmployeeLastName
from [Order] as o
  join customer as c on c.id = o.CustomerId
  join employee as e on e.Id = o.EmployeeId