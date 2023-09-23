# Definimos nuestra clase base Approver que representa un nivel de aprobación
class Approver:
    def __init__(self):
        self.next_approver = None

    def set_next_approver(self, approver):
        self.next_approver = approver

    def process_request(self, request):
        raise NotImplementedError("El método process_request() debe ser implementado por las subclases.")

# Definimos nuestras clases concretas que extienden la clase base Approver
class Manager(Approver):
    def process_request(self, request):
        if request['amount'] <= 1000:
            print("La solicitud de compra ha sido aprobada por el gerente.")
        elif self.next_approver:
            self.next_approver.process_request(request)
        else:
            print("La solicitud de compra no puede ser aprobada.")

class Director(Approver):
    def process_request(self, request):
        if request['amount'] <= 5000:
            print("La solicitud de compra ha sido aprobada por el director.")
        elif self.next_approver:
            self.next_approver.process_request(request)
        else:
            print("La solicitud de compra no puede ser aprobada.")

class CEO(Approver):
    def process_request(self, request):
        if request['amount'] <= 10000:
            print("La solicitud de compra ha sido aprobada por el CEO.")
        else:
            print("La solicitud de compra no puede ser aprobada.")

# Utilizamos el patrón Chain of Responsibility para procesar solicitudes de compra
manager = Manager()
director = Director()
ceo = CEO()

manager.set_next_approver(director)
director.set_next_approver(ceo)

request1 = {'amount': 800}
manager.process_request(request1) # La solicitud de compra ha sido aprobada por el gerente.

request2 = {'amount': 3500}
manager.process_request(request2) # La solicitud de compra ha sido aprobada por el director.

request3 = {'amount': 15000}
manager.process_request(request3) # La solicitud de compra no puede ser aprobada.