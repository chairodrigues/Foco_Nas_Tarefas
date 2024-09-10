using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDoList.Lista.DTOs
{
    [AutoMap(typeof(Categoria))]
    public class CategoriaDto:EntityDto<long>
    {
        public string CategoriaLista { get;set;}
       public List<SubcategoriaDto> Subcategorias { get;set;}

        public string Descricao { get;set;}
        public string Texto { get;set;}

        public string Detalhamento { get;set;}

        public int SubcategoriasCount { get; set; }
    }
}
