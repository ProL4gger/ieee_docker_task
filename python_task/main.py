class worker:
    def __init__(self, name, age, salary):
        self.name = name
        self.age = age
        self.salary = salary

    def display_info(self):
        print(f"Name: {self.name}, Age: {self.age}, Salary: {self.salary}")

    def give_raise(self, amount):
        self.salary += amount
        print(f"{self.name} got a raise of {amount}. New salary: {self.salary}")
    
if __name__ == "__main__":
    worker1 = worker("Alice", 30, 5000)
    worker1.display_info()
    worker1.give_raise(5000)
    worker1.display_info()