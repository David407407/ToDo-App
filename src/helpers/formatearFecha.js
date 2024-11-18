export function formatearFecha(fecha, formato = 'DD/MM/YYYY') {
    const opciones = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };
  
    const partesFecha = new Date(fecha).toLocaleDateString('es-ES', opciones).split('/');
    const [dia, mes, año] = partesFecha;
  
    switch (formato) {
      case 'DD/MM/YYYY':
        return `${dia}/${mes}/${año}`;
      case 'MM/DD/YYYY':
        return `${mes}/${dia}/${año}`;
      case 'YYYY/MM/DD':
        return `${año}/${mes}/${dia}`;
      case 'DD-MM-YYYY':
        return `${dia}-${mes}-${año}`;
      case 'MM-DD-YYYY':
        return `${mes}-${dia}-${año}`;
      case 'YYYY-MM-DD':
        return `${año}-${mes}-${dia}`;
      default:
        return `${dia}/${mes}/${año}`; // Formato por defecto
    }
  }