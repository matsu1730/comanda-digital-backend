
-- 1. Categoria de Produto
INSERT INTO tb_categoria_produto (nom_categoria) VALUES
                                                         ('Bebidas'),
                                                         ('Lanches'),
                                                         ('Sobremesas');

-- 2. Ramo
INSERT INTO tb_ramo (nom_ramo) VALUES
                                       ('Restaurante'),
                                       ('Padaria');

-- 3. Estabelecimento
INSERT INTO tb_estabelecimento (nom_estabelecimento, num_cnpj, des_endereco, id_ramo) VALUES
                                                                                              ('Pizzaria Central', '12345678000199', 'Rua das Flores, 100', 1),
                                                                                              ('Padaria Doce Pão', '98765432000188', 'Av. Brasil, 200', 2);

-- 4. Produto
INSERT INTO tb_produto (nom_produto, des_produto, val_produto, id_estabelecimento, id_categoria_produto) VALUES
                                                                                                                 ('Pizza Margherita', 'Pizza tradicional com molho de tomate e mussarela', 45.00, 1, 2),
                                                                                                                 ('Refrigerante Lata', 'Refrigerante 350ml', 6.00, 1, 1);

-- 5. Cliente
INSERT INTO tb_cliente (num_cpf, nom_cliente, des_email) VALUES
                                                                 ('11122233344', 'João Silva', 'joao@email.com'),
                                                                 ('55566677788', 'Maria Souza', 'maria@email.com');

-- 6. Método de Pagamento
INSERT INTO tb_metodo_pagamento (nom_metodo) VALUES
                                                     ('Cartão de Crédito'),
                                                     ('Pix');

-- 7. Cliente Método de Pagamento
INSERT INTO tb_cliente_metodo_pagamento ( num_cartao, dt_validade, id_cliente, id_metodo_pagamento) VALUES
                                                                                                           ('4111111111111111', '2027-12-31', 1, 1),
                                                                                                           ('5555555555554444', '2026-06-30', 2, 1),
                                                                                                           ('PIX-joao@email.com', '2030-01-01', 1, 2);

-- 8. Status do Pedido
INSERT INTO tb_status_pedido (nom_status) VALUES
                                                  ('Em Aberto'),
                                                  ('Em Preparo'),
                                                  ('Finalizado');

/*
-- 9. Pedido
INSERT INTO tb_pedido (id, id_estabelecimento, id_cliente, id_status_pedido, dt_criacao) VALUES
                                                                                             (1, 1, 1, 1, '2025-06-22 18:00:00'),
                                                                                             (2, 2, 2, 2, '2025-06-22 19:00:00');

-- 10. Pedido Item
INSERT INTO tb_pedido_item (id, num_quantidade, id_pedido, id_produto) VALUES
                                                                           (1, 2, 1, 1),
                                                                           (2, 1, 1, 3),
                                                                           (3, 3, 2, 2);

-- 11. Pagamento
INSERT INTO tb_pagamento (id, val_pagamento, dt_pagamento, id_pedido, id_cliente_metodo_pagamento) VALUES
                                                                                                       (1, 97.00, '2025-06-22 18:30:00', 1, 1),
                                                                                                       (2, 25.50, '2025-06-22 19:30:00', 2, 2);
*/

CREATE OR REPLACE FUNCTION fn_atualizar_status_pedidos()
RETURNS INTEGER AS $$
DECLARE
registros_atualizados INTEGER;
BEGIN
UPDATE tb_pedido
SET id_status_pedido = id_status_pedido + 1
WHERE id_status_pedido < 3;

GET DIAGNOSTICS registros_atualizados = ROW_COUNT;

RETURN registros_atualizados;
END;
$$ LANGUAGE plpgsql;