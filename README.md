# Site Desentupidora Costa

Site estático e responsivo (HTML, CSS e JavaScript), pronto para GitHub Pages.

## Antes de publicar

1. Confirme o nome, a cidade, os serviços e o telefone com a empresa.
2. No arquivo `script.js`, altere `telefone` e preencha `instagram` com o endereço real do perfil. Enquanto não houver Instagram, o botão exibe um aviso, sem direcionar a um perfil inventado.
3. Na seção `Trabalhos realizados` do `index.html`, substitua cada `<div class="photo-placeholder">...</div>` por uma imagem, por exemplo: `<img src="fotos/trabalho1.jpg" alt="Técnico realizando desentupimento de tubulação" loading="lazy" width="800" height="600">`. Crie a pasta `fotos` e envie as imagens autorizadas pela empresa. Acrescente ao `style.css`: `.gallery img{width:100%;height:210px;object-fit:cover;display:block}`.
4. Revise o texto de atendimento e remova qualquer serviço que a empresa não ofereça.

## Publicar no GitHub Pages

1. Crie um repositório público no GitHub.
2. Envie `index.html`, `style.css` e `script.js` na raiz do repositório.
3. Em **Settings > Pages**, selecione **Deploy from a branch**, branch `main` e pasta `/(root)`.
4. Aguarde a publicação e acesse o endereço informado pelo GitHub.

O domínio próprio pode ser configurado depois, quando a empresa confirmar o registro e acesso ao DNS.
