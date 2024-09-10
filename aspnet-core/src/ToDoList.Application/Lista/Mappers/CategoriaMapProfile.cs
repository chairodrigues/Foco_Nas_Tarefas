﻿using Abp.AutoMapper;
using Abp.Domain.Entities;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDoList.Lista.DTOs;

namespace ToDoList.Lista.Mappers
{ 
    public class CategoriaMapProfile : Profile
    {
        public CategoriaMapProfile()
        {
            CreateMap<Categoria, CategoriaDto>().
                ForMember(X => X.SubcategoriasCount, y =>
                    y.MapFrom(x => Subcategorias != null ? x.Subcategorias.Count : 0)
                );
                
        }
    }
    
}
