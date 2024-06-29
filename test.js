// ****************************************************
// exo 1
// function name(prenom)
// {
//   return 'Bonjour '+ prenom;
// }
// ****************************************************
// exo 2
// function somme(x,y)
// {
// console.log(x + y);
//   return x + y;
// }
// ****************************************************
// exo 3
// function benef(cout, vente)
// {
//   let res = vente - cout;
//   if(cout < vente)
//   {
//     console.log(' Gain de :'+res);
//   }
//   else
//   {
//     console.log(' Perte de :'+res);
//   }
//   return vente - cout;
// }
// benef(1, 4);
// ****************************************************
// exo 4
// function max(x,y,z)
// {
//   console.log(Math.max(x,y,z));
//   return Math.max(x,y,z);
// }
// max(100,25,44);
// ****************************************************
// exo 5
// function x(...tab)
// {
//   console.log(Math.max(...tab));
// }
// ****************************************************
// exo 6
// function notes(prenom, ...notes)
// {
//   // total
//   let t = 0;
//   // longueur tab
//   let len = notes.length;
//   // Boucle les notes
//   for (let i = 0; i < len; i++)
//   {
//     t += notes[i];
//   }
//   // Divis par le nbr de note
//   let m = t / len;
//   // Return result
//   mention(m);
// }
//
// function mention(m)
// {
//   console.log(m);
//   // Boucle sur la moyenne
//   switch(true)
//   {
//     case (0 > m || m > 20):
//       console.log('Note non valide');
//       break;
//     case (0 <= m &&  m <= 4):
//       console.log('Catastrophique');
//       break;
//     case (5 <= m &&  m <= 10):
//       console.log('Insuffisant');
//       break;
//     case (11 <= m &&  m <= 14):
//       console.log('Passable');
//       break;
//     case (15 <= m &&  m <= 18):
//       console.log('Bien');
//       break;
//     case (19 <= m || m == 20):
//       console.log('Très bien');
//       break;
//     default:
//       console.log('error');
//
//   }
// }
// ****************************************************
// exo 7
// function math(x, y, op)
// {
//   switch (op)
//   {
//     case '-':
//       return x-y;
//       break;
//     case '+':
//       return x+y;
//       break;
//     case '/':
//       return x/y;
//       break;
//     case '*':
//       return x*y;
//       break;
//     default:
//       return;
//   }
// }
// ****************************************************
// exo 8
// function tab(nb)
// {
//   let tab = '';
//   for (var i = 0; i < nb; i++)
//   {
//     tab = tab+'*' ;
//     console.log(tab);
//   }
//   for(var i = nb; i > 0; i--)
//   {
//     tab = tab.replace('*', '');
//     console.log(tab);
//   }
// }
// tab(10);
// ****************************************************
// exo 9
// function billets(dec)
// {
//   console.log(dec);
//   // Test si c'est un nbr
//   if(!isNaN(dec))
//   {
//     // Objets
//     let billets = {"Billet de 500": 500, "Billet de 200": 200, "Billet de 20": 20, "Billet de 10": 10, "Billet de 5": 5};
//
//     for(let key in billets)
//     {
//       // Recup le montant restant
//       let rest = dec % billets[key];
//       // Recup le nbr billet qu'on a besoin
//       let nb_billet = dec / billets[key];
//       // Recup nbr a soustraire
//       let del = Math.floor(nb_billet) * billets[key];
//       // Affiche nbr Billet
//       console.log(key +" : "+ Math.floor(nb_billet));
//       // Soustrait la valeur total (nbr billet * la valeur du tableau)
//       dec -= del;
//       // si moins de 5 boucle array piece
//       if(dec < 5)
//       {
//         piece(dec.toFixed(2));
//       }
//     }
//   }
//   else
//   {
//     console.log('not');
//   }
// }
// billets(545.55);
//
// function piece(centime)
// {
//   // Tableau piece
//   let pieces = {"Pièce de 2": 2, "Pièce de 0.50": 0.50, "Pièce de 0.02": 0.02};
//   // Boucle sur le tableau
//   for(let key in pieces)
//   {
//     // console.log(centime);
//     let mod = centime % pieces[key];
//     // console.log(mod);
//     let nb_piece = centime / pieces[key];
//     let cent = Math.floor(nb_piece) * pieces[key];
//     centime -= cent;
//     // console.log(nb_piece);
//     console.log(key +" : "+ Math.floor(nb_piece));
//   }
// }
// ****************************************************
// exo 10
((proche, ...temp) =>
{
  let tab = [];
  // Boucle tab user
  for(let i = 0; i < temp.length; i++)
  {
    // Test if number temp ou nbr proche
    if(!isNaN(temp[i]) || !isNaN(proche))
    {
      if(temp[i] == proche)
      {
        console.log('Egale : '+temp[i]);
      }
      else if(temp[i] < proche)
      {
        let diff = Math.abs(proche - temp[i]);
        tab.push(diff);
      }
      else if (temp[i] > proche)
      {
        let diff = Math.abs(temp[i] - proche);
        // tab.push({temp[i]+' : '+diff});
        tab.push(diff);
      }
      else
      {
        console.log('error');
      }
    }
    else
    {
      console.log('Ce n\'est pas un nombre !');
    }
  }

  // Recup index
  let x = res(tab);
  // Renvoi le num du tab avec l'index du plus petit trouver
  console.log(temp[x]);

})(57,5,6,11,54,65);

// Fonction recup l'index le plus petit
function res(tab)
{
  // Recup le plus petit nbr du tab
  let small = Math.min(...tab);

  // Boucle le tab recup index
  for (var i = 0; i < tab.length; i++)
  {
    if(tab[i] == small)
    {
      return i;
    }
  }
}

console.log('xxxxxx');
