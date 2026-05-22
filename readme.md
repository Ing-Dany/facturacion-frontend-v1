iRoute-David Ceo-presidente del Cluster
ERICK presentador
uno de ecoted presento a Salvatore
DEBEMOS ARQUITECTO DE SOLUCIONES
metodologia de trabajo con IA para desarrollo
en 4 horas una solucion entregable para el mercado
Vibe coding y SDD banca reatil manufactura
Eraser.io , analisis y diseño
supermaven construccion
qodo,cop´lilot 
mabl, diffblue cover - testing
pulumi, harness AIDA-deploy
snyk apprisk, dynatreace copilot-ops security

bolt.new, replit agent, claude 3.5 google AI studio, lovable.dev, v0 by vercel

SDD 
lo que no se documenta no se desarrolla por a IA
mitigar alucinaciones por medio de una documentacion estructurada

IDE
kiro, cursor, windsurf, aider, zed AI github copilot workspace, claude

Pensar en distemas no en lineas de codigo -DISEÑO DE ARQUITECTURA}la especificacion es al fuente de verdad-VALIDACION DE SPECS
Verificar lo que la iA GENERA-SEGURIDAD LOGICA
communicar inteccion con presicion-PROMPT ENGINEERING
La meta es resolucion pura de problemas de negocio y dejar la codificacion mecanica



crea en docs/ las carpetas usuarios, clientes, productos, facturas, reportes. dentro de cada una crea contenido: historias_usuario.md, flujos.md, reglas_negocio.md contexto: se desarollara un sistema de facturación (Pais:Ecuador, IVA 15%, solo existe 1 solo rol de usuario, esta es la v1 donde no se resta stock)

genera docs/spec_tecnica.md con endpoints REST pior modulo y modelo de datos con tablas: usuarios, clientes, productos, facturas, detalles_factura. Incluye relaciones FK

genera docs/diagrama_componentes.md con diagrama C4 en Mermaid:fronted react(Netlify), Backend Express (Render), BD PostgresSQL (Supabase). Muestra también los 5 modulos

genera bd/schema.sql con el DDL basado en docs/spec_tecnica.md Incluye RLS y GRANT para anon

genera docs/prompts_desarrollo.md con prompts ordenados para implementar cada moduloen backend y frontend. Cada prompt debe referencia los archivos de docs/y spec_tecnica.md como contexto.
VIBE CODING
toma el control deñ pproyecto de facturación. Backend en facturacion-backend/, fronted en facturacion-frontend/, credenciales en configuración/. Lee docs/spec_tecnica.md y docs/prompts_desarrollo.md. Avisame cuando estes listo para empezar

lee docs/prompts_desarrollo.md mapea cada prompt y crea docs/control_ejecucion.md con el listado de prompts con estados:pendiente, en ejecución, finalizado.

lee el primer prompt pendiente de doc/control_ejecucion.md realiza las tareas que se indican, valida que todo este acorde a lo expuesto, lee cada archivo de referencia y actualiza su estado al finalizar la tarea que se menciona en dicho prompt. Por cada prompt finalizado realiza un commit en el repositorio correspondiente(facturacion-backend/ o facturacion-fronted/) con el mensaje :"feat:¨[tarea realizada]"

ejecuta el siguiente prompt pendiente y continua con el siguiente