# Comencemos definiendo nuestras clases de empleados:
class Developer:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def accept(self, visitor):
        visitor.visit_developer(self)

class Manager:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def accept(self, visitor):
        visitor.visit_manager(self)

# Ahora, definamos nuestra clase Visitor que se encargará de calcular el salario total de los empleados:
class SalaryCalculator:
    def __init__(self):
        self.total_salary = 0

    def visit_developer(self, developer):
        self.total_salary += developer.salary

    def visit_manager(self, manager):
        self.total_salary += manager.salary

    def get_total_salary(self):
        print(f"El salario total de los empleados es: {self.total_salary}")

# Ahora, veamos cómo utilizar el patrón Visitor para calcular el salario total de los empleados:
developer1 = Developer("Juan", 5000)
developer2 = Developer("María", 6000)
manager = Manager("Pedro", 8000)

salary_calculator = SalaryCalculator()

developer1.accept(salary_calculator)
developer2.accept(salary_calculator)
manager.accept(salary_calculator)

salary_calculator.get_total_salary()
# El salario total de los empleados es: 19000