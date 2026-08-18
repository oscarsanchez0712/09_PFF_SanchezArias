import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  categoria: string;
  isbn: string;
  anio: number;
  stock: number;
  precio: number;
}

interface Venta {
  id: number;
  libro: string;
  cantidad: number;
  total: number;
  fecha: string;
}

interface Contacto {
  id: number;
  nombre: string;
  correo: string;
  telefono: string;
  mensaje: string;
}

interface Reserva {
  id: number;
  cliente: string;
  libro: string;
  fecha: string;
  estado: string;
}

interface Cita {
  id: number;
  cliente: string;
  fecha: string;
  hora: string;
  motivo: string;
  estado: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  seccion = 'inicio';
  busqueda = '';

  libros: Libro[] = [
    {
      id: 1,
      titulo: 'Cien años de soledad',
      autor: 'Gabriel García Márquez',
      categoria: 'Novela',
      isbn: '9780307474728',
      anio: 1967,
      stock: 10,
      precio: 45
    },
    {
      id: 2,
      titulo: 'El principito',
      autor: 'Antoine de Saint-Exupéry',
      categoria: 'Fantasía',
      isbn: '9780156012195',
      anio: 1943,
      stock: 15,
      precio: 35
    },
    {
      id: 3,
      titulo: 'Don Quijote de la Mancha',
      autor: 'Miguel de Cervantes',
      categoria: 'Clásico',
      isbn: '9788420412146',
      anio: 1605,
      stock: 5,
      precio: 50
    }
  ];

  ventas: Venta[] = [];
  contactos: Contacto[] = [];
  reservas: Reserva[] = [];
  citas: Cita[] = [];

  nuevoLibro: Libro = {
    id: 0,
    titulo: '',
    autor: '',
    categoria: '',
    isbn: '',
    anio: 2026,
    stock: 0,
    precio: 0
  };

  nuevaVenta = {
    libro: '',
    cantidad: 1
  };

  nuevoContacto: Contacto = {
    id: 0,
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
  };

  nuevaReserva: Reserva = {
    id: 0,
    cliente: '',
    libro: '',
    fecha: '',
    estado: 'Pendiente'
  };

  nuevaCita: Cita = {
    id: 0,
    cliente: '',
    fecha: '',
    hora: '',
    motivo: '',
    estado: 'Pendiente'
  };

  cambiarSeccion(seccion: string) {
    this.seccion = seccion;
    this.busqueda = '';
  }

  get librosFiltrados() {
    const texto = this.busqueda.toLowerCase();

    return this.libros.filter(libro =>
      libro.titulo.toLowerCase().includes(texto) ||
      libro.autor.toLowerCase().includes(texto) ||
      libro.categoria.toLowerCase().includes(texto)
    );
  }

  siguienteId(lista: any[]): number {
    if (lista.length === 0) {
      return 1;
    }

    return Math.max(...lista.map(item => item.id)) + 1;
  }

  agregarLibro() {

    if (
      !this.nuevoLibro.titulo ||
      !this.nuevoLibro.autor ||
      !this.nuevoLibro.categoria ||
      !this.nuevoLibro.isbn
    ) {
      alert('Completa todos los datos del libro');
      return;
    }

    this.libros.push({
      ...this.nuevoLibro,
      id: this.siguienteId(this.libros)
    });

    this.nuevoLibro = {
      id: 0,
      titulo: '',
      autor: '',
      categoria: '',
      isbn: '',
      anio: 2026,
      stock: 0,
      precio: 0
    };

    alert('Libro registrado correctamente');
  }

  eliminarLibro(id: number) {
    this.libros = this.libros.filter(libro => libro.id !== id);
  }

  realizarVenta() {

    const libro = this.libros.find(
      l => l.titulo === this.nuevaVenta.libro
    );

    if (!libro) {
      alert('Selecciona un libro');
      return;
    }

    if (this.nuevaVenta.cantidad <= 0) {
      alert('La cantidad no es válida');
      return;
    }

    if (this.nuevaVenta.cantidad > libro.stock) {
      alert('No hay suficientes ejemplares');
      return;
    }

    libro.stock -= this.nuevaVenta.cantidad;

    this.ventas.push({
      id: this.siguienteId(this.ventas),
      libro: libro.titulo,
      cantidad: this.nuevaVenta.cantidad,
      total: libro.precio * this.nuevaVenta.cantidad,
      fecha: new Date().toLocaleDateString()
    });

    this.nuevaVenta = {
      libro: '',
      cantidad: 1
    };

    alert('Venta registrada correctamente');
  }

  agregarContacto() {

    if (
      !this.nuevoContacto.nombre ||
      !this.nuevoContacto.correo ||
      !this.nuevoContacto.telefono
    ) {
      alert('Completa los datos del contacto');
      return;
    }

    this.contactos.push({
      ...this.nuevoContacto,
      id: this.siguienteId(this.contactos)
    });

    this.nuevoContacto = {
      id: 0,
      nombre: '',
      correo: '',
      telefono: '',
      mensaje: ''
    };

    alert('Contacto registrado');
  }

  eliminarContacto(id: number) {
    this.contactos =
      this.contactos.filter(contacto => contacto.id !== id);
  }

  agregarReserva() {

    if (
      !this.nuevaReserva.cliente ||
      !this.nuevaReserva.libro ||
      !this.nuevaReserva.fecha
    ) {
      alert('Completa los datos de la reserva');
      return;
    }

    this.reservas.push({
      ...this.nuevaReserva,
      id: this.siguienteId(this.reservas)
    });

    this.nuevaReserva = {
      id: 0,
      cliente: '',
      libro: '',
      fecha: '',
      estado: 'Pendiente'
    };

    alert('Reserva registrada correctamente');
  }

  cancelarReserva(id: number) {

    const reserva = this.reservas.find(r => r.id === id);

    if (reserva) {
      reserva.estado = 'Cancelada';
    }
  }

  agregarCita() {

    if (
      !this.nuevaCita.cliente ||
      !this.nuevaCita.fecha ||
      !this.nuevaCita.hora ||
      !this.nuevaCita.motivo
    ) {
      alert('Completa todos los datos');
      return;
    }

    this.citas.push({
      ...this.nuevaCita,
      id: this.siguienteId(this.citas)
    });

    this.nuevaCita = {
      id: 0,
      cliente: '',
      fecha: '',
      hora: '',
      motivo: '',
      estado: 'Pendiente'
    };

    alert('Cita registrada correctamente');
  }

  cancelarCita(id: number) {

    const cita = this.citas.find(c => c.id === id);

    if (cita) {
      cita.estado = 'Cancelada';
    }
  }

  get totalVentas() {
    return this.ventas.reduce(
      (total, venta) => total + venta.total,
      0
    );
  }

  get librosAgotados() {
    return this.libros.filter(libro => libro.stock === 0).length;
  }
}